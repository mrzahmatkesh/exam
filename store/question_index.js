export const state = () => ({
    index: 0
})

export const mutations = {
    inc_index(state) {
        if (state.index < 8) {
            state.index++
        }
    },
    dec_index(state) {
        if (state.index > 0) {
            state.index--
        }
    }
}