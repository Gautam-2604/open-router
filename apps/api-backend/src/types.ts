import { t } from "elysia";

//types file


export const Messages = t.Array(t.Object({
    role: t.Enum({
      user: "user",
      assistant: "assistant"
    }),
    content: t.String()
}))

export type Messages = typeof Messages.static;

export const Conversation = t.Object({
    model: t.String(),
    messages: Messages
})
