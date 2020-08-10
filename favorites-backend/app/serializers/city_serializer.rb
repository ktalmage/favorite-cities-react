class CitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :zipcode, :title, :description, :state
  belongs_to :state
end
