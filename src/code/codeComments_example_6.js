function canUpdateMessage(current_user, message) {
  const FIVE_MINUTES = 5 * 60;

  const isAuthor = message.user.id == current_user.id;
  const isRecent =
    message.delivered_time() === null ||
    (datetime.now() - message.delivered_time()).seconds < FIVE_MINUTES;
  const isAdmin = current_user.type == User.Administrator;

  return (isAuthor && isRecent) || isAdmin;
}

if (canUpdateMessage(current_user, message)) {
  message.update_text(text);
}
