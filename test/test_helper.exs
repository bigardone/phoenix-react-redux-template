ExUnit.start

Mix.Task.run "ecto.create", ~w(-r HelloPhoenix.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r HelloPhoenix.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(HelloPhoenix.Repo)

