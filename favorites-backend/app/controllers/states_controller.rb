class StatesController < ApplicationController
    def index
        states = State.all
        render json: StateSerializer.new(states)
    end

    def show
        state = State.find_by(id: params[:id])
        render json: StateSerializer.new(state)
    end
end
