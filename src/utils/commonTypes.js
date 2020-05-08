import PropsType from "prop-types"
export default {
    children:PropsType.node,
    groupDatas:PropsType.arrayOf(PropsType.shape({
        value:PropsType.string.isRequired,
        text:PropsType.string.isRequired
    })),
    chooseDatas:PropsType.arrayOf(PropsType.string)
}