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
    // mounted() {
    //     this.save();
    // },
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
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.error('Error Response:', error.response.data);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.error('No Response:', error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.error('Error', error.message);
                    }
                    console.error('Config:', error.config);
                }
            }

        }
    }
}
</script>

<style scoped></style>