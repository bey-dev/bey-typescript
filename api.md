# Agent

Types:

- <code><a href="./src/resources/agent.ts">DeveloperAgentResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agent.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /v1/agent">client.agent.<a href="./src/resources/agent.ts">create</a>({ ...params }) -> DeveloperAgentResponse</code>
- <code title="get /v1/agent">client.agent.<a href="./src/resources/agent.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/agent/{agent_id}">client.agent.<a href="./src/resources/agent.ts">delete</a>(agentID) -> unknown</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthVerifyResponse</a></code>

Methods:

- <code title="get /v1/auth/verify">client.auth.<a href="./src/resources/auth.ts">verify</a>() -> unknown</code>

# Avatar

Types:

- <code><a href="./src/resources/avatar.ts">AvatarListResponse</a></code>

Methods:

- <code title="get /v1/avatar">client.avatar.<a href="./src/resources/avatar.ts">list</a>({ ...params }) -> AvatarListResponse</code>

# Calls

Types:

- <code><a href="./src/resources/calls.ts">CallListResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallListMessagesResponse</a></code>

Methods:

- <code title="get /v1/calls">client.calls.<a href="./src/resources/calls.ts">list</a>({ ...params }) -> CallListResponse</code>
- <code title="get /v1/calls/{call_id}/messages">client.calls.<a href="./src/resources/calls.ts">listMessages</a>(callID) -> CallListMessagesResponse</code>

# Session

Types:

- <code><a href="./src/resources/session.ts">Session</a></code>
- <code><a href="./src/resources/session.ts">SessionListResponse</a></code>

Methods:

- <code title="post /v1/session">client.session.<a href="./src/resources/session.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/session/{id}">client.session.<a href="./src/resources/session.ts">retrieve</a>(id) -> Session</code>
- <code title="get /v1/session">client.session.<a href="./src/resources/session.ts">list</a>() -> SessionListResponse</code>
