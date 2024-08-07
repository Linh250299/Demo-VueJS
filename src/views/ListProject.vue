<template>
    <div class="container">
     <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Mail</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="index" v-for="(item,index) in users">
                <td>{{ item.id  }}</td>
                <td>{{ item.username  }}</td>
                <td>{{ item.email  }}</td>
                <td>
                    <button class="btn btn-primary" @click="onEdit(item.id)">Edit</button>
                    <button class="btn btn-danger" @click="onDelete(item.id)">Delete</button>
                </td>
            </tr>
        </tbody>
     </table>
    </div>
 </template>
 
 <script>
 export default {
     name: 'ListProJects',
     mounted() {
        this.getAll();
    },
     data() {
        return {
            users: [],
        }
     },
     methods: {
       getAll() {
        this.$request.get('http://127.0.0.1:3336/user').then( res => {
             this.users = res.data
        })
       },
       onDelete(id) {
        this.$request.delete(`http://127.0.0.1:3336/delete-user/${id}`).then( res => {
             console.log(res);
        })
       },
       onEdit(id) {
        console.log(id);
        // this.$request.delete(`http://127.0.0.1:3336/${id}`).then( res => {
        //      console.log(res);
        // })
       }
     }
 }
 </script>
 
 <style scoped></style>