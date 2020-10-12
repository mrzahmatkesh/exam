export const state = () => ({
    new: 0
})

export const mutations = {
    new(state) {
        state.new = 1
    },
    finish(state){
        state.new = 0
    }
}