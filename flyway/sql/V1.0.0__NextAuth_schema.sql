-- Tables are ordered alphabetically, except as dictated by foreign key constraints.

--[ # EXTENSIONS # ]--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--[ # TRIGGERS # ]--

-- See https://x-team.com/blog/automatic-timestamps-with-postgresql/
CREATE OR REPLACE FUNCTION trigger_set_updated_at()
    RETURNS TRIGGER AS
$$
BEGIN
    new.updated_at = NOW();
    RETURN new;
END;
$$ LANGUAGE plpgsql;

--[ # TABLE public.users # ]--

CREATE TABLE IF NOT EXISTS public.users
(
    id             UUID                           DEFAULT uuid_generate_v4() NOT NULL
        CONSTRAINT users_pk
            PRIMARY KEY,
    name           TEXT,
    email          TEXT,
    email_verified TIMESTAMP(3) WITHOUT TIME ZONE,
    image          TEXT,
    created_at     TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP  NOT NULL,
    updated_at     TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP  NOT NULL
);

CREATE UNIQUE INDEX users_email_key
    ON users (email);

CREATE TRIGGER set_users_updated_at
    BEFORE UPDATE
    ON users
    FOR EACH ROW
EXECUTE PROCEDURE trigger_set_updated_at();

--[ # TABLE public.accounts # ]--

CREATE TABLE IF NOT EXISTS public.accounts
(
    id                  UUID                           DEFAULT uuid_generate_v4() NOT NULL
        CONSTRAINT accounts_pk
            PRIMARY KEY,
    user_id             UUID                                                      NOT NULL
        CONSTRAINT accounts_users_id_fk
            REFERENCES public.users
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    type                TEXT                                                      NOT NULL,
    provider            TEXT                                                      NOT NULL,
    provider_account_id TEXT                                                      NOT NULL,
    refresh_token       TEXT,
    access_token        TEXT,
    expires_at          INTEGER,
    token_type          TEXT,
    scope               TEXT,
    id_token            TEXT,
    session_state       TEXT,
    created_at          TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP  NOT NULL,
    updated_at          TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP  NOT NULL
);

CREATE UNIQUE INDEX accounts_provider_provider_account_id_key
    ON accounts (provider, provider_account_id);

CREATE TRIGGER set_accounts_updated_at
    BEFORE UPDATE
    ON accounts
    FOR EACH ROW
EXECUTE PROCEDURE trigger_set_updated_at();

--[ # TABLE public.sessions # ]--

CREATE TABLE IF NOT EXISTS public.sessions
(
    id            UUID                           DEFAULT uuid_generate_v4() NOT NULL
        CONSTRAINT sessions_pk
            PRIMARY KEY,
    user_id       UUID                                                      NOT NULL
        CONSTRAINT sessions_users_id_fk
            REFERENCES public.users
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    session_token TEXT                                                      NOT NULL,
    expires       TIMESTAMP(3) WITHOUT TIME ZONE                            NOT NULL,
    created_at    TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP  NOT NULL,
    updated_at    TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP  NOT NULL
);

CREATE UNIQUE INDEX sessions_session_token_key
    ON sessions (session_token);

CREATE TRIGGER set_sessions_updated_at
    BEFORE UPDATE
    ON sessions
    FOR EACH ROW
EXECUTE PROCEDURE trigger_set_updated_at();

--[ # TABLE public.sessions # ]--

CREATE TABLE IF NOT EXISTS public.verification_tokens
(
    identifier TEXT                                                     NOT NULL,
    token      TEXT                                                     NOT NULL,
    expires    TIMESTAMP(3) WITHOUT TIME ZONE                           NOT NULL,
    created_at TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX verification_token_key
    ON verification_tokens (token);

CREATE UNIQUE INDEX verification_identifier_token_key
    ON verification_tokens (identifier, token);

CREATE TRIGGER set_verification_tokens_updated_at
    BEFORE UPDATE
    ON verification_tokens
    FOR EACH ROW
EXECUTE PROCEDURE trigger_set_updated_at();
