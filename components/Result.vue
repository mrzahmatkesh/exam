<template>
    <b-card class="result_exam mt-5" text-variant="dark" title="نتیجه آزمون">
        <p class="d-inline m-3">تعداد صحیح : <strong>{{this.$store.state.answer_correct.index}}</strong></p>
        <p class="d-inline m-3">تعداد غلط : <strong>{{cQuestionLenght - this.$store.state.answer_correct.index}}</strong></p>
        <p class="d-inline m-3">نمره شما از 100 : <strong>{{Number((this.$store.state.answer_correct.index/cQuestionLenght * 100).toFixed(0)
            )}}</strong></p>
        <p class="ip">your ip : {{this.ip}}</p>
    </b-card>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
           return{
               ip: ''
           }
        },
        props: {
            cQuestionLenght: Number
        },

        async created() {
            await axios.get("https://api.ipify.org?format=json").then(response=> (this.ip = response.data.ip))
        }
    }
</script>
<style lang="sass">
    .result_exam
        -webkit-box-shadow: 0 0 10px 5px rgba(253, 248, 247, 0.69)
        -moz-box-shadow: 0 0 10px 5px rgba(253, 248, 247, 0.69)
        box-shadow: 0 0 10px 5px rgba(253, 248, 247, 0.69)
        border: 0px !important
        padding-bottom: 50px
        a
            margin: 5px
            border: 1px solid #f1f1f1 !important
        h4
            line-height: 2.2
        .options
            width: 30px !important
            text-align: center !important
        strong
            background: #f44336
            color: #f7f8fb
            padding: 3px 8px
            -webkit-border-radius: 3px
            -moz-border-radius: 3px
            border-radius: 3px
                
    .ip
        background: #eaeaea
        color: #888
        position: absolute
        top: 5px
        left: 5px
        padding: 3px 8px
        -webkit-border-radius: 3px
        -moz-border-radius: 3px
        border-radius: 3px
        font-size: 9px
</style>