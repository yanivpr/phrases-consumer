class ApiClient

  FORMAT = 'json'
  VERSION = 'v1'
  USERNAME = 'babbel'
  PASSWORD = 'ruby'

  def random
    url = api_url('random')

    HTTParty.get(url, basic_auth: auth)
  end

  def append(phrase)
    url = "#{api_url('append')}"
    HTTParty.post(url, basic_auth: auth, body: { text: phrase } )
  end

  private

  def api_url(action)
    "#{base_url}/#{action}"
  end

  def base_url
    "http://localhost:3000/api/#{VERSION}/phrases"
  end

  def auth
    { :username => USERNAME, :password => PASSWORD }
  end

end