Project retrv:

Idea: An automated study tool where users can submit questions and answers to those questions.
It will be a self-organising study tool that implements the concepts of spaced-retrieval and interleaving.
How will this be done?
It will work by the user supplying predefined periods to revist succesfully answered questions
eg. periods of 1 day, 1 week, 2 weeks and 4 weeks.
If a user gets a question right the question will be moved to the next revisit period,
for example: the question would be moved from the 1 day stack to the 1 week stack.
If a user gets the question wrong then the question will remain in the current stack,
for example: if the current stack of questions was the 1 day period, a user would revist the same question in 1 day.

user stories:

- a user should be able to create study cards based on their textbook/notes/etc. Cards will include a question
  and the answer to the question.
- a users cards should be presented to them to answer based on a minimum time interval having elasped between
  the last time they answered the question and the current time they are answering questions
- the minimum time interval that elapses between when a user revists a card should depend on whether they
  answered the card succesfully the last time they visited it
- a user should provide the input to say whether they got the card right or wrong
- a user should be able to edit the questions and answers on their cards
- a user should be able to delete a card
- a user should not have access to another users cards
