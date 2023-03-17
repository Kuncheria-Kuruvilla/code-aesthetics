const FIVE_MINUTES = 5 * 60;

const isAuthor = message.user.id == current_user.id;
const isRecent =
  message.delivered_time() === null ||
  (datetime.now() - message.delivered_time()).seconds < FIVE_MINUTES;
const isAdmin = current_user.type == User.Administrator;

if ((isAuthor && isRecent) || isAdmin) {
  message.update_text(text);
}
