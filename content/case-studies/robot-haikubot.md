---
path: robot-haikubot
date: 2020-08-09T22:06:36.584Z
title: Robot Haikubot
description: A Twitter bot that sends a randomly-generated haiku to those that ask for one!
type: study
tech: ['Node.js', 'Express', 'MongoDB', 'Heroku']
---
Robot Haikubot will tweet you a randomly-generated haiku when you tweet at it; e.g., “Hey @RobotHaikubot, you up?”

You can also include either a [\#positive](https://www.facebook.com/hashtag/positive?source=feed_text&epa=HASHTAG&__xts__%5B0%5D=68.ARB2ok2Qy7TSH2KvWie4h-LRFDYj82-H8sM8xU6BSCVn9h-2izV9uYQhNPrEvgQRV1P95ZqeNyFW7a3z8e8SmQGNtULaMhqR9Cw65nKksZtC5S57cA5erzti8ACXI-TsXSUoK91vB3vTsWUL4OyfFBDVwQjvhaaR95eiB0M7MhIZfcMq_687Jvg8e8h2-NTb_JjUzhfMmiOVt-AB8Q&__tn__=%2ANK-R), [\#negative](https://www.facebook.com/hashtag/negative?source=feed_text&epa=HASHTAG&__xts__%5B0%5D=68.ARB2ok2Qy7TSH2KvWie4h-LRFDYj82-H8sM8xU6BSCVn9h-2izV9uYQhNPrEvgQRV1P95ZqeNyFW7a3z8e8SmQGNtULaMhqR9Cw65nKksZtC5S57cA5erzti8ACXI-TsXSUoK91vB3vTsWUL4OyfFBDVwQjvhaaR95eiB0M7MhIZfcMq_687Jvg8e8h2-NTb_JjUzhfMmiOVt-AB8Q&__tn__=%2ANK-R), or [\#neutral](https://www.facebook.com/hashtag/neutral?source=feed_text&epa=HASHTAG&__xts__%5B0%5D=68.ARB2ok2Qy7TSH2KvWie4h-LRFDYj82-H8sM8xU6BSCVn9h-2izV9uYQhNPrEvgQRV1P95ZqeNyFW7a3z8e8SmQGNtULaMhqR9Cw65nKksZtC5S57cA5erzti8ACXI-TsXSUoK91vB3vTsWUL4OyfFBDVwQjvhaaR95eiB0M7MhIZfcMq_687Jvg8e8h2-NTb_JjUzhfMmiOVt-AB8Q&__tn__=%2ANK-R) hashtag in your tweet and get back a haiku with that sentiment; e.g., “Hey @RobotHaikubot, I would love a #positive haiku please!”.

Robot Haikubot is built using Node.js, MongoDB, and Express for data management and manipulation and the [Twit](https://www.npmjs.com/package/twit), [Sentiment](https://www.npmjs.com/package/sentiment), and [Syllable](https://www.npmjs.com/package/syllable) npm packages for accessing the Twitter API and checking syllable count and sentiment. We deployed the final app to Heroku.
