
# build assets
cd "assets"
yarn
yarn build

# install dependencies and digest assets
cd -
mix deps.get
mix phx.digest

# build binary
export MIX_ENV=prod
mix release --overwrite

# restart server
echo "Restarting server"
_build/prod/rel/chubi/bin/chubi stop
_build/prod/rel/chubi/bin/chubi daemon

echo "COMPLETED"
