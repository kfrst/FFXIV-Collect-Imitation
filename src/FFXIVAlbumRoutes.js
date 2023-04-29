import { Home } from "./components/routes/home"
import { HomeIndex } from "./components/routes/homeIndex"
import { NotFound } from "./components/routes/notFound"
import { Mounts } from "./components/routes/mounts/mounts"
import { Mount } from "./components/routes/mounts/mount"
import { Minions } from "./components/routes/minions/minions"
import { Minion } from "./components/routes/minions/minion"
import { Orchestrions } from "./components/routes/orchestrions/orchestrions"
import { Orchestrion } from "./components/routes/orchestrions/orchestrion"
import { Achievements } from "./components/routes/achievements/achievements"
import { Achievement } from "./components/routes/achievements/achievement"
import { Titles } from "./components/routes/titles/titles"
import { Spells } from "./components/routes/spells/spells"
import { Spell } from "./components/routes/spells/spell"
import { Emotes } from "./components/routes/emotes/emotes"
import { Emote } from "./components/routes/emotes/emote"
import { Bardings } from "./components/routes/bardings/bardings"
import { Barding } from "./components/routes/bardings/barding"
import { Hairstyles } from "./components/routes/hairstyles/hairstyles"
import { Hairstyle } from "./components/routes/hairstyles/hairstyle"
import { Armoires } from "./components/routes/armoires/armoires"
import { Armoire } from "./components/routes/armoires/armoire"
import { Fashions } from "./components/routes/fashions/fashions"
import { Fashion } from "./components/routes/fashions/fashion"
import { Frames } from "./components/routes/frames/frames"
import { Frame } from "./components/routes/frames/frame"
import { Records } from "./components/routes/records/records"
import { Record } from "./components/routes/records/record"
import { Surveys } from "./components/routes/surveys/surveys"
import { Survey } from "./components/routes/surveys/survey"
import { Faq } from "./components/routes/faq"
import { Routes, Route } from "react-router-dom"

export const FFXIVAlbumRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomeIndex />} />
        <Route path="achievements/search" element={<Achievements />} />
        <Route path="achievements/:achievementID" element={<Achievement />} />
        <Route path="titles" element={<Titles />} />
        <Route path="mounts" element={<Mounts />} />
        <Route path="mounts/:mountID" element={<Mount />} />
        <Route path="minions" element={<Minions />} />
        <Route path="minions/:minionID" element={<Minion />} />
        <Route path="orchestrions" element={<Orchestrions />} />
        <Route path="orchestrions/:orchestrionID" element={<Orchestrion />} />
        <Route path="spells" element={<Spells />} />
        <Route path="spells/:spellID" element={<Spell />} />
        <Route path="emotes" element={<Emotes />} />
        <Route path="emotes/:emoteID" element={<Emote />} />
        <Route path="bardings" element={<Bardings />} />
        <Route path="bardings/:bardingID" element={<Barding />} />
        <Route path="hairstyles" element={<Hairstyles />} />
        <Route path="hairstyles/:hairstyleID" element={<Hairstyle />} />
        <Route path="armoires" element={<Armoires />} />
        <Route path="armoires/:armoireID" element={<Armoire />} />
        <Route path="fashions" element={<Fashions />} />
        <Route path="fashions/:fashionID" element={<Fashion />} />
        <Route path="frames" element={<Frames />} />
        <Route path="frames/:frameID" element={<Frame />} />
        <Route path="records" element={<Records />} />
        <Route path="records/:recordID" element={<Record />} />
        <Route path="survey_records" element={<Surveys />} />
        <Route path="survey_records/:surveyID" element={<Survey />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
