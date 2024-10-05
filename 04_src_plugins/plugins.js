export default {
    install(Vue) {
        Vue.filter("mySlice",function (value) {
            return value.slice(0, 1)
        })

        Vue.directive("fbind",{
            bind(element, binding){
                element.value = binding.value

            },
            inserted(element){
                element.focus()
            },
            update(element, binding){
                element.value = binding.value
                element.focus()
            }
        })

        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            },
            mounted() {
                console.log("你好啊挂载")
            },
            methods:{
                showName(){
                    alert(this.name)
                }
            }
        })

        Vue.prototype.hello  = ()=>(alert('hello'))

    }
}