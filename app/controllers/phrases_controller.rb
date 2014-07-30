require 'api_client'
class PhrasesController < ApplicationController
  respond_to :json

  def home

  end

  def random
    phrase = ApiClient.new.random

    render json: phrase
  end

  def append
    phrase = params[:phrase]
    ApiClient.new.append phrase
  end

end
