class StateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :cities
  has_many :cities
end
