<template>
    <div>
        <b-navbar type="dark" variant="info">
            <b-navbar-brand>آزمون آنلاین هوش</b-navbar-brand>
            <b-badge variant="light" v-if="this.$store.state.new_exam.new == 1" class="mr-5">{{this.$store.state.question_index.index + 1}} / 9</b-badge>
        </b-navbar>
    </div>
</template>
