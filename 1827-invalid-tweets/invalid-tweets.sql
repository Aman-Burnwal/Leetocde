# Write your MySQL query statement below
SELECT tweet_id
From Tweets
WHERE CHAR_LENGTH(Tweets.content) > 15