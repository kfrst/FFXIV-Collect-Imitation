import { NormalLink } from "../components/styled-components/commonElements"

export const IndexText = () => {
  return (
    <div>
      <h1>FFXIV Collect</h1>
      <p>Another website for tracking your Final Fantasy XIV collections.</p>
      <hr />
      <h5>Keep your Lodestone collections updated automatically</h5>
      <p>
        Your collections are updated automatically to reflect any new mounts, minions, and achievements you
        obtain based on your Lodestone profile.
      </p>
      <h5>Update the rest with a simple user interface</h5>
      <p>
        Any collectables not visible on your Lodestone profile can be updated manually as you obtain them.
      </p>
      <h5>Powered by the community</h5>
      <p>
        I'm relying on the community to keep my sources up to date. If you see a source that is missing or
        incorrect, please let me know on <NormalLink href="https://discord.gg/DkYqtWWpUr" target="_blank" rel="noopener noreferrer">Discord</NormalLink>
        .
      </p>
      <h5>Do you have feedback? I want to hear it!</h5>
      <p>
        The community is what motivates me to create these projects, so if you have any feedback, please let
        me know on <NormalLink href="https://discord.gg/bA9fYQjEYy" target="_blank" rel="noopener noreferrer">Discord</NormalLink>.
      </p>
    </div>
  )
}

export const PersonalText = () => {
  return (
    <div>
      <h5> An imitation of FFXIV Collect</h5>
      <p>
        The first section is part of the official home page from FFXIV Collect, the reason to be there is to show credits to the developer of the official web
      </p>
      <p>All of this imitation is made with the following tools:</p>
      <ul>
        <li>React: Redux Toolkit / React Router DOM / Hooks / Formik </li>
        <li>CSS: Styled components</li>
        <li>
          API offered by <NormalLink href="https://github.com/mattantonelli" target="_blank" rel="noopener noreferrer">Raelys Skyborn</NormalLink>, the developer of FFXIV Collect.
        </li>
      </ul>
    </div>
  )
}

export const FaqText = () => {
  return (
    <>
      <h5>Why aren't my emotes/bardings/etc. being updated?</h5>
      <p>
        Only achievements, mounts, and minions can be updated automatically based on your Lodestone profile.
        All other collectibles must be tracked manually.
      </p>
      <hr />
      <h5>What about things like Blue Magic spells?</h5>
      <p>The additional collections available on your profile are only visible when you are signed in.</p>
      <hr />
      <h5>Why aren't my achievements being updated after I set them to Public?</h5>
      <p>
        You will need to refresh your character to fetch the achievements after you have updated your privacy
        settings.
      </p>
      <hr />
      <h5>Why does the website say my character is private and keep me from selecting it?</h5>
      <p>
        This typically occurs when you have made your character private on another Discord account. You will
        need to join the Discord server so we can re-verify your identity and resolve this.
      </p>
      <hr />
      <h5>How are your ownership percentages calculated?</h5>
      <p>
        Ownership is calculated based on publicly available characters who have been updated on the site in
        the past 3 months and possess at least one collectable in a given category.
      </p>
      <p>
        These percentages are not a reflection of the entire playerbase, but rather a subset of players who
        are interested in collecting things. If you are looking to collect competitively, then this is
        probably the data you want.
      </p>
      <hr />
      <h5>Why do achievement percentages not match the mount percentages?</h5>
      <p>
        Achievements are hidden by default on your Lodestone profile, which makes achievement ownership a much
        smaller dataset. See the statistics below for details.
      </p>
    </>
  )
}
