const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/language-group-app_development",
      test: "postgres://postgres:postgres@localhost:5432/language-group-app_test",
      e2e: "postgres://postgres:postgres@localhost:5432/language-group-app_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
