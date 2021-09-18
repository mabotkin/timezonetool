# TimeZoneTool

Chrome extension to make communicating times across timezones easier.

## Usage

**Sending:** Use the TimeZoneTool Chrome extension popup window to select a time (in your local timezone) that you wish to communicate.  Then, copy the flag and send to your desired recepient.

**Receiving:** Every 5 seconds, TimeZoneTool should automatically scan your page for flags, and replace them with the correct local time that is represented.

## Installation

Download the repository as a `.zip` file, and unzip the folder.  Go to the Chrome Extensions page, and enable Developer mode.  Drag the folder containing the extension files into Chrome Extensions.

## Roadmap

Here are some ideas for feature improvement:

- [ ] Additional options, such as display formats or page check frequency.
- [ ] Check page on update rather than on a fixed interval (for performance).
- [ ] Allow users to select which pages to enable TimeZoneTool on.
- [ ] Create ways to insert a TimeZoneTool flag more easily (perhaps right-click options).
- [ ] Improve detection of flags to be more efficient.

Known bugs:
- [ ] Facebook Messenger input is an HTML `span` node, and so if you type a flag in the chat box, it could be replaced by TimeZoneTool with your local time, before you can press enter.