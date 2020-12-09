import { stories } from '../data'

export const assets = stories.map(story => [story.avatar, story.source]).flat()
