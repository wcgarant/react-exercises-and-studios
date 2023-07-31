export default function HobbyLinks() {
    let hobbyLinks = ["https://www.freelibrary.org/", "https://react.dev/learn"];
    return (
        <div>
            <a href={hobbyLinks[0]}>The Free Library of Philadelphia</a>
            <a href={hobbyLinks[1]}>Learn React</a>
        </div>
    )
}