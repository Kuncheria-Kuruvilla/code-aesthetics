void registerUser(String user)
{
    String[] parts = user.split(":");
    if (parts.length == 2)
    {
        int userId = Integer.parseInt(parts[0]);
        if (userId >= 0)
        {
            String userName = parts[1];
            if (users.containsKey(userId))
            {
                users.get(userId).setName(userName);
            }
            else
            {
                users.put(userId, new User(userName));
            }
        }
        else
        {
            throw new IllegalArgumentException("Invalid user id:" + userId);
        }
    }
    else
    {
        throw new IllegalArgumentException("Invalid user string:" + user);
    }
}