<template>
    <b-card class="question mt-5" text-variant="dark" :title="cQuestion.title">
        <span class="number_question">{{this.$store.state.question_index.index + 1}}</span>
        <b-list-group>
            <b-list-group-item href="#" @click="selectAnswer(cQuestion.answers[array_shuffle_answers[0]])"
                               :class="submited_answer[submited_answer.indexOf(cQuestion.id) + 1] == cQuestion.answers[array_shuffle_answers[0]] && submited_answer.includes(cQuestion.id) ? 'redback' : '' ">
                <b-badge class="ml-4 options" variant="light" pill>الف</b-badge>
                {{cQuestion.answers[array_shuffle_answers[0]]}}
            </b-list-group-item>
            <b-list-group-item href="#" @click="selectAnswer(cQuestion.answers[array_shuffle_answers[1]])"
                               :class="submited_answer[submited_answer.indexOf(cQuestion.id) + 1] == cQuestion.answers[array_shuffle_answers[1]] && submited_answer.includes(cQuestion.id)? 'redback' : '' ">
                <b-badge class="ml-4 options" variant="light" pill>ب</b-badge>
                {{cQuestion.answers[array_shuffle_answers[1]]}}
            </b-list-group-item>
            <b-list-group-item href="#" @click="selectAnswer(cQuestion.answers[array_shuffle_answers[2]])"
                               :class="submited_answer[submited_answer.indexOf(cQuestion.id) + 1] == cQuestion.answers[array_shuffle_answers[2]] && submited_answer.includes(cQuestion.id) ? 'redback' : '' ">
                <b-badge class="ml-4 options" variant="light" pill>ج</b-badge>
                {{cQuestion.answers[array_shuffle_answers[2]]}}
            </b-list-group-item>
            <b-list-group-item href="#" @click="selectAnswer(cQuestion.answers[array_shuffle_answers[3]])"
                               :class="submited_answer[submited_answer.indexOf(cQuestion.id) + 1] == cQuestion.answers[array_shuffle_answers[3]] && submited_answer.includes(cQuestion.id) ? 'redback' : '' ">
                <b-badge class="ml-4 options" variant="light" pill>د</b-badge>
                {{cQuestion.answers[array_shuffle_answers[3]]}}
            </b-list-group-item>
        </b-list-group>
        <b-button href="#" variant="light" v-if="cQuestionLength - 1 > this.$store.state.question_index.index" @click="next">سوال بعدی</b-button>
        <b-button href="#" variant="light" v-if="0 < this.$store.state.question_index.index" @click="back">سوال قبلی</b-button>
        <b-button href="#" variant="success"
                  @click="selectedAnswer ? submit_answer(selectedAnswer): ''"
                  v-if="!submited_answer.includes(cQuestion.id)"
        >ثبت پاسخ
        </b-button>
        <b-button v-if="cQuestion.id == cQuestionLength" variant="info" @click="finish_exam()">پایان آزمون</b-button>
    </b-card>
</template>


<script>

    export default {

        props: {
            cQuestion: Object,
            cQuestionLength: Number,
            next: Function,
            back: Function,
            submit_answer: Function,
            selectAnswer: Function,
            selectedAnswer: String,
            submited_answer: Array,
            array_shuffle_answers: Array,
            finish_exam: Function
        }

    }

</script>
<style lang="sass" scoped>
    .question
        -webkit-box-shadow: 0 0 10px 5px rgba(253, 248, 247, 0.69)
        -moz-box-shadow: 0 0 10px 5px rgba(253, 248, 247, 0.69)
        box-shadow: 0 0 10px 5px rgba(253, 248, 247, 0.69)
        border: 0px !important
        a
            margin: 5px
            border: 1px solid #f1f1f1 !important
        h4
            line-height: 2.2
        .options
            width: 30px !important
            text-align: center !important

        .redback
            background: #e1e1e1
        .whiteback
            background: green
    .number_question
        position: absolute
        top: 0px
        right: 0px
        background: #f1f1f1
        -webkit-border-radius: 0 0 0 30px
        -moz-border-radius: 0 0 0 30px
        border-radius: 0 0 0 30px
        color: #888
        padding: 3px 8px
</style>