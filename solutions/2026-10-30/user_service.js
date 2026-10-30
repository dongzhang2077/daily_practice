/*
Problem: extend_active_user_ranking
Date: 2026-10-30
Budget: 15 minutes, chosen as a medium session by the learner.
Source: AI-provided existing behavior; learner extension pending.

Existing behavior:
getTopActiveUsers(users) returns all active users in descending score order.

New requirement:
Extend the function to getTopActiveUsers(users, limit).
- An omitted or undefined limit preserves the existing behavior.
- A supplied limit is a nonnegative integer: return at most that many users.
- A limit of 0 returns an empty array.
- A limit larger than the number of active users returns all active users.
- An empty input returns an empty array.
- Return user objects, not only their IDs.
- Do not modify the input array or its user objects.

Input records have valid id, active (boolean), and score (finite number).
Scores are distinct for this exercise. Invalid limits are outside the task.
Reuse the existing helpers without changing them. Choose and write your own
assertions covering the old call, the new call, and at least one boundary
you select. Report what you consulted; stop or adjust the budget by choice.
*/

import { filterActiveUsers, sortUsersByScore } from "./user_helpers.js";

export function getTopActiveUsers(users, limit) {
  // when user = true, descending the suitable user array
  const sortedUsers = sortUsersByScore(filterActiveUsers(users));
  if (typeof limit === "undefined") return sortedUsers;
  if (!sortedUsers || limit < 0) {
    return [];
  }
  if (sortedUsers.length <= limit) {
    // when user.length <= limit
    return sortedUsers;
  } else {
    // cut off the users exceed the scope
    // google -> how to realize the function and find slice funciton
    // debug, should slice the sorted arr
    // 如何确定slice的具体截取数量，比如limit 为 2 的时候，users的数量长度，实际上为3，那么从尾部开始截取，需要+1？这是我目前做下来唯一的疑问
    // 我看谷歌解释，如果是截掉末尾的1位那么就是slice(0,-1),对吧，按照我们现在的方法来说，那就是limit-users.length,是不需要+1的
    // 所以我怀疑谷歌出来的方法可能有误，现在的slice的截取参数，需要+1才能得到想要的

    return sortedUsers.slice(0, limit - sortedUsers.length);
  }
}

// trouble I encounter, js doesnt support function overloading, google the solution

// export function getTopActiveUsers(users, limit) {
//   //users is empty array
//   if (!users || limit < 0) {
//     return [];
//   }
//   if (users.length <= limit) {
//     // when user.length <= limit
//     return sortUsersByScore(filterActiveUsers(users));
//   } else {
//     // cut off the users exceed the scope
//     // google -> how to realize the function and find slice funciton
//     return sortUsersByScore(
//       filterActiveUsers(users.slice(0, limit - users.length)),
//     );
//   }
// }
