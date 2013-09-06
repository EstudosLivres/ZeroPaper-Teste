require 'test_helper'

class GalinhasControllerTest < ActionController::TestCase
  setup do
    @galinha = galinhas(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:galinhas)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create galinha" do
    assert_difference('Galinha.count') do
      post :create, galinha: { galinha_id: @galinha.galinha_id, nome: @galinha.nome, racs: @galinha.racs }
    end

    assert_redirected_to galinha_path(assigns(:galinha))
  end

  test "should show galinha" do
    get :show, id: @galinha
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @galinha
    assert_response :success
  end

  test "should update galinha" do
    patch :update, id: @galinha, galinha: { galinha_id: @galinha.galinha_id, nome: @galinha.nome, racs: @galinha.racs }
    assert_redirected_to galinha_path(assigns(:galinha))
  end

  test "should destroy galinha" do
    assert_difference('Galinha.count', -1) do
      delete :destroy, id: @galinha
    end

    assert_redirected_to galinhas_path
  end
end
