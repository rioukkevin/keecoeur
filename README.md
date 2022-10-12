# keecoeur le bot

## Setup

Copy .env.example > .env

Fill with client_secret + client_id + twitch_config

```sh
yarn
yarn dev # Ctrl+C
chmod 777 ./data/db.sqlite
yarn dev
```

> **For token claim to one dev**

## Database models

### Commands

channel > string
authorization > "broadcaster", "modo","vip", "sub", "viewer"
template > string > "!love {{username}} {{number[1-4]}}"
output > string > "Moi j'aime {username} {{[randomBetween1and4](number,personne)}} personnes"

## Roles

parents > number
slug > string
id > number
