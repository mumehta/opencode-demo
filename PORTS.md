# Variant preview ports

Each design branch runs as a git worktree under `../variants/`
(each has its own `node_modules`). All `vite.config.js` files default to port
5173, so dev servers are started with a manual CLI override:

```bash
# from the worktree directory, e.g. ../variants/rulebase
vite --port <port>
```

## Current mapping (started 2026-10-05)

| Port | Worktree | Branch | Source doc in `Designs/` |
|------|----------|--------|--------------------------|
| 5173 | xiloteca | `xiloteca` | `xiloteca.it-design.md` |
| 5174 | colabs-editorial | `design/colabs-editorial` | `DESIGN_CoLabsLightEditorial.md` |
| 5175 | warm-heritage | `design/warm-heritage` | `DESIGN_WarmHeritage.md` |
| 5176 | dribbble | `design/dribbble` | `dribbble.com-design.md` |
| 5177 | archival-ledger | `design/archival-ledger` | `intelligence-ai-design.md` (*) |
| 5178 | wherenext | `design/wherenext` | `kamdalej.sk-design.md` (content is WhereNext) |
| 5179 | onyx-doctor | `design/onyx-doctor` | `onyx.doctor-design.md` |
| 5180 | rulebase | `design/rulebase` | `rulebase.co-design.md` |
| 5181 | smc-green | `design/smc-green` | `smc.co-design.md` |
| 5182 | taylor-hare | `design/taylor-hare` | `taylorhare.com-design.md` |
| 5183 | wealthsimple-dark | `design/wealthsimple-dark` | `wealthsimple.com-design.md` |
| 5184 | context | `design/context` | `www.context.dev-DESIGN.md` |

(*) Inferred by elimination; not confirmed from file contents.

## Notes

- `main` itself is not served; port 5173 is the `xiloteca` worktree.
- The mapping lives only in the running processes. After a reboot,
  re-run `vite --port <port>` from each worktree to restore it.
- Every branch's `DESIGN.md` still reads `Xiloteca Trevigiana`; variant
  identity lives in `tailwind.config.js` + components. Branch-to-design
  traceability is this file plus the `Designs/` source docs.
