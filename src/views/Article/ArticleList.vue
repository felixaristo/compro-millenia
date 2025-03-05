<script>
    export default{
        data(){
            return {
                articleJson: null,
                currentArticle: null,
                othersArticle: null
            }
        },
        methods: {
            gotoArticle(id){
                window.location.href = "/article/" + id
            }   
        },
        async setup(){
            const url = window.location.href;
            const id = url.split("/").slice(-1)[0];
            const res = await fetch(import.meta.env.VITE_BASE_URL_API + 'article/list/1/100')
            const posts = await res.json()
            
            const allArticle = posts.data;
            return {
                allArticle
            }
        }
    }
</script>

<template>
    <BContainer class="bv-example-row" fluid='xxl'>
        <div class="list-article">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2>Artikel</h2>
            </div>
            <template v-for="i in allArticle">
                <div @click="gotoArticle(i.id)" class="item item-artikel" style="display: flex;  margin-bottom: 30px;">
                    <div style="width: 400px;">
                        <img class="thumbnail" v-bind:src="i.image" style="width: 100%; height: 100%; border-radius: 5px 0px 0px 5px;">
                    </div>
                    <div style="width: 1200px; padding: 5px 10px 5px 10px;">
                        <p style="font-weight: bold; font-size: 18px;">{{ i.title }}</p>
                        <p style="font-size: 14px; margin-top: 10px; text-align: justify;">{{ i.description }}</p>
                        <div class="discovery-btn" @click="gotoArticle(posts.data[3].id)">
                            <span>Discover More</span>
                            <img src="../../assets/img/down.png" style="width: 18px;">
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </BContainer>
</template>

