# The Guardian RSS Feed Generator API
API for generating RSS feeds from The Guardian Newspaper

## Version: 1.0.0

### /rss/{section}

#### GET
##### Summary:

Get RSS feed for a specific section of news

##### Description:

Returns an RSS feed for the selected section

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| section | path | Allows you to choose the type of news to receive in the RSS feed (i.e. technology, football, etc.) | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Successful response with RSS feed compliant with W3C standards |
| 400 | Invalid section format |
| 404 | Requested section is not valid |
| 500 | Internal server error |