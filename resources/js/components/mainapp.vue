<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                        <router-view></router-view>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Routervue2 from "./routervue2";
export default {
    components: {Routervue2},
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
