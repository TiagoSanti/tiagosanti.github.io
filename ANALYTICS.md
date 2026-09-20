# CV analytics

GA4 loads only in production builds served from the canonical HTTPS origin in
`social.website`. Localhost, development servers and other preview origins do
not load the Google tag or queue analytics events. Keep the measurement ID and
canonical website aligned in both language configurations.

## Events

| Event                  | Meaning                                       | Additional parameters        |
| ---------------------- | --------------------------------------------- | ---------------------------- |
| `page_view`            | One initial view per document load            | `page_title`                 |
| `language_change`      | Visitor changes the displayed language        | `previous_language`          |
| `project_click`        | Opens a featured project or GitHub repository | `project_id`, `project_type` |
| `project_details_open` | Expands project details                       | `project_id`                 |
| `publication_click`    | Opens official proceedings                    | `publication_id`             |
| `contact_click`        | Clicks a professional contact or CV link      | `contact_channel`            |

All custom events include `content_language` (`pt` or `en`). Project IDs are
stable across languages. Contact channels are `lattes`, `linkedin`, `email` and
`phone`; custom events do not include email addresses or phone numbers. A click
does not prove that a message was sent or that someone read the destination.

The initial view is explicitly sent with automatic config pageviews disabled.
Language and theme changes do not create additional views. The Google tag loads
independently of the GitHub API. Blocked analytics must not break interactions.

## Reports

Event-scoped custom dimensions were registered in GA4 for `content_language`,
`project_id`, `project_type`, `publication_id` and `contact_channel`. Use them in
Explorations with event count and total users, filtered to the corresponding
event. Dimensions apply to newly collected data, not historical events.

Enhanced measurement can also collect outbound `click` and `file_download`
events. These describe different levels of the same interaction: do not sum
them with `project_click` or `contact_click` as distinct actions. Download
measurement indicates a link click, not successful completion of a download.

## Validation

Run `npm test`, lint, formatting checks and both site/library builds. Browser QA
can route the canonical origin to the local production build and intercept the
Google tag and collection endpoints, inspecting `dataLayer` without sending
test traffic. Verify language persistence, one initial pageview, contact and
project payloads, and absence of the tag on localhost. After publication, check
actual collection in GA4 DebugView/Realtime separately; intercepted tests do
not establish server-side receipt.

References: [pageviews](https://developers.google.com/analytics/devguides/collection/ga4/views),
[event naming](https://support.google.com/analytics/answer/13316687),
[custom dimensions](https://support.google.com/analytics/answer/14239696).
