import { LaureateBanner } from "../../../interface/interface"

const LaureateBannerElement = (prop:LaureateBanner) => {
    return (
        <section id="laureateBanner">
            <h1>{prop.name}</h1>
        </section>
    )
}
export default LaureateBannerElement