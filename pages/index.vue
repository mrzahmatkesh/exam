<template>
    <b-container>
        <no-ssr>
            <vac
                    :end-time="new Date().getTime() + 120000"
                    :auto-start="false"
                    @finish="(vac) => finish(vac)"
                    ref="vac1"
            >
            <span
                    slot="process"
                    slot-scope="{ timeObj }"
                    class="mt-3 mx-auto d-block text-center timer"
            >
                {{ ` ${timeObj.m}:${timeObj.s}` }}
            </span>
            </vac>
        </no-ssr>
        <Content
                :array_shuffle_answers="array_shuffle_answers"
                :cQuestion="questions[this.$store.state.question_index.index]"
                :cQuestionLength="questions.length"
                :next="next"
                :back="back"
                :selectAnswer="selectAnswer"
                :submit_answer="submit_answer"
                :selectedAnswer="selectedAnswer"
                :submited_answer="submited_answer"
                :finish_exam="finish_exam"
                v-if="start == 1 && finished == 0"
        />
        <result
                :cQuestionLenght="questions.length"
                v-if="finished == 1"
        />
        <b-button pill
                  variant="info"
                  v-if="start == 0"
                  @click="startCountd()"
                  class="mt-5 mx-auto d-block"
        >شروع آزمون
        </b-button>

    </b-container>
</template>

<script>
    import Vue from 'vue';
    import vueAwesomeCountdown from 'vue-awesome-countdown';
    import _ from 'lodash'

    Vue.use(vueAwesomeCountdown, 'vac');
    export default {
        data() {
            return {
                questions: [
                    {
                        id: 1,
                        title: 'کدام یک از گزینه‌های زیر با بقیه کمترین شباهت را دارد؟',
                        answers: [
                            'بیلیارد',
                            'بیس بال',
                            'بدمینتون',
                            'فوتبال2'
                        ],
                        correct: 'فوتبال'
                    },
                    {
                        id: 2,
                        title: 'اگر OCEAN را بنویسیم AENCO، آنگاه ۸۹۶۵۳ هست...',
                        answers: [
                            '۸۵۳۶۹',
                            '۵۶۳۸۹',
                            '۵۶۳۹۸',
                            '۶۵۳۹۸',
                        ],
                        correct: '۵۶۳۹۸'
                    },
                    {
                        id: 3,
                        title: 'تینا، که ۱۶ ساله است، ۴ برابر برادرش سن دارد. زمانی که تینا دوبرابر برادرش سن داشته باشد، چند ساله است؟',
                        answers: [
                            '42',
                            '23',
                            '32',
                            '24',
                        ],
                        correct: '24'
                    },
                    {
                        id: 4,
                        title: 'کدام یک از اعداد به این دنباله نمی‌خورند؟ «۲,۳,۶,۷,۸,۱۴,۱۵,۳۰»',
                        answers: [
                            '8',
                            '14',
                            '15',
                            '7',
                        ],
                        correct: '8'
                    },
                    {
                        id: 5,
                        title: 'عددی که یک چهارمِ یک دومِ یک پنجمِ ۲۰۰ باشد.',
                        answers: [
                            '14',
                            '4',
                            '5',
                            '10',
                        ],
                        correct: '5'
                    },
                    {
                        id: 6,
                        title: 'اریک ۱۳ بطری آب از مغازه نیاز دارد بخرد. او تنها می‌تواند ۳ بطری آب را در هر بار حمل کند. کمترین تعداد دفعاتی که اریک باید به مغازه برود چندبار است؟',
                        answers: [
                            '4.5',
                            '5',
                            '4',
                            '3.5',
                        ],
                        correct: '5'
                    },
                    {
                        id: 7,
                        title: 'واژه‌ای که بیشترین شباهت را به Appropriate دارد را انتخاب کنید.',
                        answers: [
                            'Irrelevant',
                            'Utimely',
                            'Suited',
                            'Truthful',
                        ],
                        correct: 'Suited'
                    },
                    {
                        id: 8,
                        title: 'ویروس‌ها برای آنند که واکسینه شوند و امتحان‌ها هستند برای ...',
                        answers: [
                            'تلاش کردن',
                            'درس خواندن',
                            'پاس کردن',
                            'شکست خوردن',
                        ],
                        correct: 'درس خواندن'
                    }, {
                        id: 9,
                        title: 'اگر ۳ پرتقال باشند و شما ۲ تای آن را بردارید، چند پرتقال خواهید داشت؟',
                        answers: [
                            '1',
                            '0',
                            '2',
                            '3',
                        ],
                        correct: '2'
                    }
                ],
                selectedAnswer: '',
                submited_answer: [],
                start: 0,
                finished: 0,
                array_shuffle_answers: _.shuffle([0,1,2,3])
            }
        },
        methods: {

            startCountd() {
                const vm = this;
                vm.$refs.vac1.startCountdown(true);
                this.start = 1;
                this.$store.commit('new_exam/new');
             },
            finish(vac) {
                this.finished = 1
            },
            finish_exam(){
                this.$refs.vac1.finishCountdown();
                this.finished = 1;
                this.$store.commit('new_exam/finish');
            },
            next() {
                if(this.questions.length - 1 > this.$store.state.question_index.index){
                    this.array_shuffle_answers = _.shuffle(this.array_shuffle_answers);
                    this.$store.commit('question_index/inc_index');
                    this.selectedAnswer = '';
                }
            },
            back() {
                this.$store.commit('question_index/dec_index');
                this.selectedAnswer = '';
            },
            selectAnswer(answer) {
                this.selectedAnswer = answer;
            },
            submit_answer(selectedAnswer) {
                if (this.questions[this.$store.state.question_index.index].correct == selectedAnswer) {
                    this.$store.commit('answer_correct/inc_index');
                }
                let id = this.questions[this.$store.state.question_index.index].id;
                this.submited_answer.push(id, selectedAnswer);
            }
        },
        head(){

        }
    }
</script>
<style lang="sass" scoped>
    .timer
        background: #E91E63
        color: #fff
        width: 100px
        -webkit-border-radius: 30px
        -moz-border-radius: 30px
        border-radius: 30px
        padding: 3px 8px
</style>