/**
 * Contains the miscellaneous route handlers.
 * @author Agbai Victor <https://github.com/AhfricanAce>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
