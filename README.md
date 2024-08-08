# The Guardian RSS Feed API

This repository provides an Express application that exposes an API for generating RSS feeds based on articles from of The Guardian, a leading UK newspaper.

## Usage

### Starting the server

```bash
THE_GUARDIAN_API_KEY="<your-api-key>" docker compose up
```

**THE_GUARDIAN_API_KEY** is mandatory and it's used to retrieve the news feed from the Guardian.  
If you don't already have an API key [you will need to sign up for an API key from The Guardian website](https://open-platform.theguardian.com/documentation/). 

If you want to show debug logs, activate debug mode using **DEBUG_MODE** as an environment variable:

```bash
THE_GUARDIAN_API_KEY="<your-api-key>" DEBUG_MODE="1" docker compose up
```

### API Usage

The application exposes only one endpoint to port 3000:

```
GET http://localhost:3000/rss/:section
```

The `:section` parameter allows you to choose the type of news to receive in the RSS feed (i.e. technology, football, etc.).  
This parameter is **required**.

[Check full api documentation for more](API_DOC.md)

### Running tests

```bash
docker compose -f docker-compose.test.yml up --build
```