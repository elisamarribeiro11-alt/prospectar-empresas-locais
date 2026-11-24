"""Validate both distributable copies and their local Markdown dependencies."""
from pathlib import Path
import re
import sys

root = Path(__file__).resolve().parents[1]
copies = [root / folder / 'skills/prospectar-empresas-locais'
          for folder in ('.agents', '.claude')]
errors = []
inventories = [{p.relative_to(folder): p.read_bytes()
                for p in folder.rglob('*') if p.is_file()}
               for folder in copies]
if not inventories[0] or inventories[0] != inventories[1]:
    errors.append('Codex and Claude packages must be present and identical')
for folder in copies:
    if not (folder / 'SKILL.md').is_file():
        errors.append(f'Missing skill entrypoint: {folder}')
for md in root.rglob('*.md'):
    for target in re.findall(r'\[[^\]]*\]\(([^)]+)\)', md.read_text()):
        if '://' in target or target.startswith('#'):
            continue
        local = target.split('#', 1)[0]
        if local and not (md.parent / local).exists():
            errors.append(f'{md.relative_to(root)}: missing {target}')
if errors:
    print('\n'.join(errors), file=sys.stderr)
    raise SystemExit(1)
print('PASS: identical Codex/Claude packages; all local Markdown links resolve')
