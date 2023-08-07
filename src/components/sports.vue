<template>
<div>
    <section>
        <div class="row">
            <div class="col-3 mt-5  ">
                <div class="list-group" id="list-tab" role="tablist">
                    <router-link class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" to=" " role="tab" aria-controls="list-home">FOOTBALL</router-link>
                    <router-link class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" to=" " role="tab" aria-controls="list-profile">BASKETBALL</router-link>
                    <router-link class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" to=" " role="tab" aria-controls="list-messages">BOXING</router-link>
                    <router-link class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" to=" " role="tab" aria-controls="list-settings">TENNIS</router-link>

                </div>
            </div>

            <div class=" col-9" >
              <div class="row">
                <div class="col-3 mx-3 mt-4 " v-for="(item, index) in items" :key="index">
                    <div class="card" style="width: 20rem;" >
                        <img :src="item.src" class="card-img-top " alt="...">
                        <div class="card-body">

                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.desc }}</p>
                            <b>{{ item.price }}</b>
                            <a href="#" class="btn btn-warning mx-4">Add to cart</a>
                        </div>
                    </div>
                </div>
              </div>


            </div>

        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                title: 'Mizuno Monarcida',
                desc: 'Mizuno Monarcida Football shoes',
                price: 'INR 999',
                src: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/JMNUMERO10BK.jpg'
            }, {
                title: ' Addidas',
                desc: 'Adidas X 16.4 FXG Football Shoes',
                price: 'INR 699',
                src: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADFSBA8289.jpg'
            }, {
                title: 'Nike',
                desc: 'Nike Mercurial Veloce III DF CR7 FG',
                price: 'INR 799',
                src: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK852518-001.jpg'

            }, {
                title: 'Mizuno Monarcida',
                desc: 'Mizuno Monarcida 4ft Pop Up Goa',
                price: 'INR 999',
                src: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADFB10120.jpg'
            }, {
                title: ' Nike',
                desc: 'Nike GK Junior Match Goalkeeper',
                price: 'INR 699',
                src: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NKGS0331-657.jpg'
            }, {
                title: 'Adidas',
                desc: 'Adidas FIFA World Cup Glider Footbal',
                price: 'INR 799',
                src: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADCE8097.jpg'

            }]
        }

    }
}
</script>

<style lang="">

</style>
