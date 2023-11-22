#!/usr/bin/env bash

set -e

pnpm seed &

sleep 5

pnpm start:dev
