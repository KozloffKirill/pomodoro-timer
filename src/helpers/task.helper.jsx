export default class TaskHelper {
   static id = 0;
   static getNewId() {
      return this.id++;
   }
}