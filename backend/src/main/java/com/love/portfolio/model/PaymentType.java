package com.love.portfolio.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum PaymentType {
    monthly,
    @JsonProperty("per-session")
    per_session,
    full
}
