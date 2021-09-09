const app = new Vue({
   el: "#root",
   data: {
      newToDo: "",
      /* toDos: [
          "Fare la spesa",
          "Fare il bucato",
          "Fare i compiti",
          "Fare schifo",
       ],*/

      toDos: [
         {
            title: "Fare i compiti",
            done: false,
         },
         {
            title: "Fare la spesa",
            done: false,
         },
         {
            title: "Fare il bucato",
            done: false,
         },
         {
            title: "Fare schifo",
            done: true,
         },
      ],
   },

   methods: {
      addToDo() {
         if (this.newToDo != "") {
            this.toDos.push({ title: this.newToDo, done: false });
            this.newToDo = "";
         }
      },
      removeToDo(index) {
         this.toDos.splice(index, 1);
      },
      changeColor(toDo) {
         toDo.done = !toDo.done;
      },
   },
});
