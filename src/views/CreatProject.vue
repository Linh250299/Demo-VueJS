<template>
    <div class="container" style="max-width: 800px;">
        <form action="" @submit.prevent="save()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Tên :</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="users.username"
                    @blur="validate()">
                <div class="invalid-feeback">{{ errors.username }}</div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mail :</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="users.email"
                    @blur="validate()">
                <div class="invalid-feeback">{{ errors.email }}</div>
            </div>
            <!-- <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mail :</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    v-model="product.content"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Ảnh </label> <br>
                <input type="file" name="" id="">
            </div> -->
            <button type="submit">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreatProject',
    data() {
        return {
            users: {
                username: '',
                email: '',
            },
            errors: {
                username: '',
                email: '',
            }
        }
    },
    created(){
       let id = this.$route.params.id;
       if (id) {
        this.getProject(id);
       }
       
    },
    methods: {
        validate() {
            let isValid = true;
            this.errors = {
                username: '',
                email: '',
            }
            if (!this.users.username) {
                this.errors.username = 'Chưa nhập'
                isValid = false;
            }
            return isValid
        },
        save() {
            if (this.validate()) {
                try {
                    this.$request.post('http://127.0.0.1:3336/create-user', this.users).then(res => {
                        if (res.status == 200) {
                            this.$router.push({ name: 'list' })
                        }
                    })
                } catch (error) {
                    if (error.response) {
                        console.error('Error Response:', error.response.data);
                    } else if (error.request) {
                        console.error('No Response:', error.request);
                    } else {
                        console.error('Error', error.message);
                    }
                    console.error('Config:', error.config);
                }
            }

        },
        getProject(id) {
            this.$request.get(`http://127.0.0.1:3336/user/${id}`).then(res => {
                if (res.status == 200) {
                    this.users = res.data.data
                }
                
            })
        }
    }
}
</script>

<style scoped></style>