# Lab 2: SCA & Automated Remediation (Answer Key)

## Overview
This repository is the **answer key** for Lab 2 of Chapter 9 (Secure CI/CD).

Students learn Software Composition Analysis (SCA) to detect vulnerabilities in third-party libraries and configure automated dependency updates with Dependabot.

## Branches

### `main` — Fixed Solution
- Uses `lodash: "^4.17.21"` (patched, no known CVEs)
- Trivy SCA scan passes in CI pipeline
- Dependabot configured for automated npm updates
- **Expected result: All pipeline jobs pass (green)**

### `vulnerable` — Vulnerable Dependencies
- Uses `lodash: "4.17.15"` (multiple known CVEs: Prototype Pollution)
- **Expected result: Pipeline FAILS at sca-scan job (Trivy detects CRITICAL/HIGH vulnerabilities)**

## Pipeline Jobs (`ci.yml`)
1. **build** — Checkout, setup Node.js 18, `npm ci`, `npm test`
2. **sca-scan** — Trivy filesystem scan (exit-code 1 on CRITICAL/HIGH)

## Dependabot Configuration
- Ecosystem: npm
- Schedule: daily
- PR limit: 10

## How to Use
1. Fork this repository
2. Enable Dependabot alerts in Settings > Code security
3. Switch to `vulnerable` branch to see SCA gate catch vulnerable lodash
4. Observe Dependabot creating PRs to update dependencies
5. Switch to `main` to see clean, passing pipeline with fixed deps
