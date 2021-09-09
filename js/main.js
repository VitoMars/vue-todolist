const app = new Vue({
   el: "#root",
   data: {
      newToDo: "",
      toDos: [
         "Fare la spesa",
         "Fare il bucato",
         "Fare i compiti",
         "Fare schifo",
      ],
   },
   methods: {
      addToDo() {
         if (this.newToDo != "") {
            this.toDos.push(this.newToDo);
            this.newToDo = "";
         }
      },
   },
});
