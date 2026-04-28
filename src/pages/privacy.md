---
title: "Privacy Policy"
layout: "~/layouts/MarkdownLayout.astro"
---

*Last updated: April 28, 2026*

Robrix is an open-source [Matrix](https://matrix.org) chat client developed by [Project Robius](https://github.com/project-robius) and published under the [GOSIM Foundation](https://gosim.org). The purpose of this page is to explain, in plain English, what happens to your data when you use Robrix.

## The short version

Robrix doesn't collect anything about you. We don't have any servers, we don't store or maintain accounts, and we can't see your messages. There's no analytics, telemetry, or third-party trackers, and in fact we have no backend infrastructure to do any of that.

## How a Matrix client works

Robrix is a client for Matrix, nothing more. When you login to the app, you connect to a Matrix homeserver of your choice (like `matrix.org`), and everything you do thereafter is a direct interaction between your device and that homeserver. The Matrix protocol is federated, so that homeserver will exchange data with other homeservers, but none of this is under the purview or control of Robrix.

Robrix only sends and receives data that is necessary for Matrix functionality. This includes but is not limited to your account credentials, room state, message events, profile data, presence, typing indicators, read receipts, and media you upload or download.

That data will persist on the homeserver you signed into, the homeservers of anyone you communicate with, and your device's local cache (in memory and/or the filesystem). The privacy policies of those homeservers, as well as any retention rules or law-enforcement obligations, will apply to that data. Robrix as an app does not see it, store it externally, or transmit it anywhere else, and we have no control over what they do with it.

## Federation, bridges, bots, and widgets

Matrix as a protocol is *federated*, meaning that messages and content you exchange with other people in Matrix rooms will be sent to and received from other homeservers. Federated homeservers may be located anywhere in the world and are subject to local laws and regulations; their privacy policy applies to their copies of your data.

Some Matrix rooms are bridged to third-party services like IRC, Discord, Slack, Telegram, XMPP, or email. When a room is bridged, your messages and any media you share may be copied onto that third-party service, beyond the control of Robrix or any other Matrix client. Bridges are independent services that may have their own privacy policies and retention rules.

Bots or widgets in a room can read that room's messages just like any other human room member. If you're in a room that includes a bot or a widget, you must assume that the operator of that bot or widget sees any and all content posted there. Robrix, as a client, does not run any bots or widgets on its own.

These behaviors are properties of the Matrix protocol and the rooms you join, not of Robrix specifically; they'd apply to any Matrix client that you choose to use.

## End-to-End Encryption (E2EE)

Matrix rooms can be end-to-end encrypted, meaning that the client (e.g., Robrix) encrypts your messages on your device before that message is sent off of the device, and decrypts those messages on the recipients' devices. Thus, E2EE messages cannot be read by your own homeserver, anyone else's homeserver, anyone on the network in between, and the Robrix developers/maintainers. Nobody on the Project Robius team has, or could ever obtain, access to your encrypted message content.

Some metadata is still visible to the homeservers involved: who is in a room, when messages are sent, message sizes, and so on. Again, that is a property of the Matrix protocol, not Robrix.

If you delete (i.e., "redact") a message, Robrix sends a redaction request up to your homeserver, which forwards it to the rest of the room. When Robrix receives redaction events from your homeserver, either for your messages or anyone else's messages, it removes that content from its local cache. Redactions clear the message body, your display name at the time, and any attached media, but your username remains visible as the original sender. Remote homeservers, bridged services, and other Matrix clients are not guaranteed to honor a redaction request, so copies may persist on devices that have already received the message.

## What's stored on your device

Robrix stores the following items locally in order to function properly:

- Your Matrix user ID, login session, and access token
- Your end-to-end encryption keys (so you can decrypt incoming messages)
- Cached messages, room state, and media you've viewed
- Your local app-specific settings

All of this lives on your device, and only on your device. It isn't sent to us (the Robrix developers or anyone at Project Robius), because there is nowhere on our end to send or store it.
This data is stored inside Robrix's own application directory and relies on OS-level protections for app data and credentials. Robrix does not upload, sync, or back up any of it on your behalf. Anyone with physical access to an unlocked device can read it, so we recommend using device-level encryption and a screen lock if you consider any of your Matrix content to be of sensitive nature.

Logging out of Robrix clears most of this on most platforms, and uninstalling the app will typically remove the rest or at least prompt you whether you want to keep or delete that app data.

## Specific features and what they touch

- **Voice and video calls.** Robrix does not yet support voice or video calls.
- **Public rooms directory.** Browsing or searching for public rooms sends queries to your homeserver (and, if you search remote directories, to those servers as well).
- **Link previews.** When a link is encountered, Robrix will ask your homeserver directly to fetch the linked URL on your behalf and return the link preview metadata. Robrix itself does not reach out to external sites directly to generate previews.
- **Identity servers.** Robrix doesn't query an identity server by default. Discovery of users by email address or phone number is not supported, so your contacts are never accessed or uploaded anywhere.
- **Single sign-on (SSO).** If your homeserver supports SSO and you choose to log in that way, Robrix opens the SSO provider's login page (for example, Google, GitHub, or your organization's identity provider) so you can authenticate directly with them. That provider --- not Robrix or your homeserver --- handles the login and may log it under their own privacy policy. Robrix only receives the resulting access token from your homeserver.
- **Push notifications.** Robrix doesn't currently route notifications through Apple, Google, or any other push gateway. Notifications, where supported, are generated locally from your active Matrix sync.
- **Crash reports.** Robrix doesn't send crash reports anywhere. Any diagnostic logs the app writes stay on your device. If you encounter a bug, you are encouraged to voluntarily share those with the Robrix development team, but that is completely optional.

If any of this changes in a future version, we'll update this page.

## What we don't do

Robrix does not do any of the following:

- Collect analytics, usage stats, or telemetry
- Send crash reports anywhere
- Use cookies or advertising identifiers
- Bundle advertising, tracking, or analytics SDKs into the app
- Read, store, or share your messages outside of the app's local filesystem storage
- Maintain any list, registry, or count of who uses Robrix

## Package managers and app stores

If you downloaded Robrix from its GitHub release page, an app store (e.g., Apple's App Store, the Google Play Store, F-Droid) or a Linux package manager repository, those distribution channels may log download metadata (IP address, device type, timestamps) under their own privacy policies. We don't receive that data and cannot control it.

## Children's privacy

Robrix isn't directed at children, and we don't intentionally process anyone's data, regardless of age. The age policy of the homeserver you sign into may also apply to your account on that homeserver.

## Your data subject rights

Privacy laws like the GDPR and CCPA give you rights over personal data — to access it, correct it, delete it, port it, and object to its processing. Because Robrix doesn't process or hold your data, there is nothing on our side to access, correct, or delete. To exercise those rights over your messages and account, please contact the administrator of the homeserver you signed into.

If you want to deactivate or delete a Matrix account, that must also be done through your homeserver, not through Robrix.

## Open source

Robrix is fully open-source. You're welcome (and encouraged!) to read the code, build it yourself, audit how it handles your data, and more. The source is available at [github.com/project-robius/robrix](https://github.com/project-robius/robrix).

## Changes to this policy

If we ever change how Robrix handles data, we'll update this page.

## Contact

Questions or concerns about Robrix or our privacy policy? You can either open an issue at [github.com/project-robius/robrix](https://github.com/project-robius/robrix/issues), or for more private queries, email us at [it@gosim.org](mailto:it@gosim.org).
